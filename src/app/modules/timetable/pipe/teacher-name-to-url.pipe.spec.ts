import { TeacherNameToUrlPipe } from './teacher-name-to-url.pipe';

describe('TeacherNameToUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new TeacherNameToUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
