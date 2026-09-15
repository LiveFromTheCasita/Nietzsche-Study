import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { works, passages, themes } from '../content/corpusData.js';

const course = JSON.parse(await readFile(new URL('../content/beginnerCourse.json', import.meta.url), 'utf8'));
function unique(items, name) {
  assert.equal(new Set(items.map((item) => item.id)).size, items.length, `${name} IDs must be unique`);
}
unique(works, 'Work'); unique(passages, 'Passage'); unique(themes, 'Theme');
const workIds = new Set(works.map(({ id }) => id));
const passageIds = new Set(passages.map(({ id }) => id));
for (const passage of passages) assert(workIds.has(passage.workId), `${passage.id}: missing work`);
for (const theme of themes) {
  const linked = new Set(theme.passageLinks.map(({ passageId }) => passageId));
  assert.equal(linked.size, theme.passageLinks.length, `${theme.id}: duplicate passage link`);
  const references = [...theme.essentialPassageIds, ...linked, ...theme.developmentalArc.flatMap((phase) => phase.representativePassageIds), ...theme.passageLinks.flatMap((link) => link.connectedPassageIds || [])];
  for (const id of references) assert(passageIds.has(id), `${theme.id}: missing ${id}`);
  for (const id of theme.essentialPassageIds) assert(linked.has(id), `${theme.id}: essential ${id} not in passage index`);
}
for (const id of ['gs-343', 'gs-344', 'gs-374']) {
  const passage = passages.find((item) => item.id === id);
  assert(passage, `Missing ${id}`);
  assert.equal(passage.period, 'late', `${id} belongs to the 1887 material`);
  assert.equal(String(passage.publicationYear), '1887', `${id} must show its own publication date`);
}
assert.equal(course.editor, 'Bob Smith');
assert.equal(course.sessions.length, 7);
assert.equal(new Set(course.sessions.map(({ slug }) => slug)).size, 7);
for (const [index, session] of course.sessions.entries()) {
  assert.equal(session.number, index + 1);
  assert(session.assignment && session.dating && session.objection && session.writingExercise);
  assert(session.context.length >= 2 && session.questions.length >= 2 && session.readings.length > 0);
  assert.equal(session.nextSlug || null, course.sessions[index + 1]?.slug || null);
  for (const reading of session.readings) {
    assert.equal(new URL(reading.url).protocol, 'https:');
    assert(reading.locator, `${session.slug}: reading locator is required`);
  }
}
console.log(`Content checks passed: ${works.length} works, ${passages.length} passages, ${themes.length} themes, 7 complete lessons.`);
