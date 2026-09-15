"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nietzsche-study-course-progress-v1";
const EMPTY_PROGRESS = { completed: [], lastVisited: null };

function readProgress(sessions) {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return EMPTY_PROGRESS;
  const value = JSON.parse(stored);
  const validSlugs = new Set(sessions.map((session) => session.slug));
  return {
    completed: Array.isArray(value?.completed)
      ? [...new Set(value.completed.filter((slug) => validSlugs.has(slug)))]
      : [],
    lastVisited: validSlugs.has(value?.lastVisited) ? value.lastVisited : null,
  };
}

export default function LessonProgress({ sessions, slug }) {
  const [progress, setProgress] = useState(null);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    function loadProgress(recordVisit = false) {
      try {
        const saved = readProgress(sessions);
        const next = recordVisit && slug ? { ...saved, lastVisited: slug } : saved;
        setProgress(next);
        if (recordVisit && slug) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setStorageUnavailable(false);
      } catch {
        setProgress((current) => current || { ...EMPTY_PROGRESS, lastVisited: slug || null });
        setStorageUnavailable(true);
      }
    }

    loadProgress(true);
    function onStorage(event) {
      if (event.key === STORAGE_KEY || event.key === null) loadProgress();
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [sessions, slug]);

  function saveProgress(next, message) {
    setProgress(next);
    setNotice(message);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setStorageUnavailable(false);
    } catch {
      setStorageUnavailable(true);
    }
  }

  const completed = progress?.completed || [];
  const isComplete = completed.includes(slug);
  const resume = sessions.find((session) => session.slug === progress?.lastVisited);
  const nextUnfinished = sessions.find((session) => !completed.includes(session.slug));

  function toggleComplete() {
    const nextCompleted = isComplete ? completed.filter((item) => item !== slug) : [...completed, slug];
    saveProgress(
      { completed: nextCompleted, lastVisited: slug },
      isComplete ? "Session marked as unfinished." : "Session marked as complete.",
    );
  }

  return (
    <section className="course-progress" aria-labelledby="course-progress-heading">
      <h2 id="course-progress-heading">Your course progress</h2>
      {progress ? (
        <>
          <p>{completed.length} of {sessions.length} sessions marked complete.</p>
          <progress value={completed.length} max={sessions.length} aria-label={`${completed.length} of ${sessions.length} sessions complete`} />
          <div className="hero-actions">
            {slug ? (
              <button type="button" onClick={toggleComplete} aria-pressed={isComplete} className={`button ${isComplete ? "button--secondary" : "button--primary"}`}>
                {isComplete ? "Completed — mark unfinished" : "Mark this session complete"}
              </button>
            ) : resume && completed.length < sessions.length ? (
              <Link href={`/lessons/${(completed.includes(resume.slug) ? nextUnfinished : resume).slug}`} className="button button--primary">
                Continue with session {(completed.includes(resume.slug) ? nextUnfinished : resume).number}
              </Link>
            ) : null}
            {!slug && (completed.length > 0 || resume) ? (
              <button type="button" className="button button--secondary" onClick={() => saveProgress(EMPTY_PROGRESS, "Course progress reset.")}>Reset course progress</button>
            ) : null}
          </div>
          {!slug && completed.length > 0 ? <p className="course-detail">Completed: {sessions.filter((session) => completed.includes(session.slug)).map((session) => `Session ${session.number}`).join(", ")}.</p> : null}
          {completed.length === sessions.length ? <p>You have marked all seven sessions complete. Your written responses are the record of what you have learned.</p> : null}
        </>
      ) : <p>Loading saved progress…</p>}
      <noscript><p>Progress controls need JavaScript. All readings, commentary, and session links are available without them.</p></noscript>
      <p className="course-detail">Progress is saved in this browser on this device. Clearing browser data removes it; it does not sync to an account.</p>
      {storageUnavailable ? <p role="status" className="course-storage-notice">This browser could not save or read progress. You can still use every lesson; changes here last only while this page stays open.</p> : null}
      <p role="status" className="sr-only">{notice}</p>
    </section>
  );
}
