const storeTask = require('./taskService.js');
// Unit-Test for SaveTask
describe('saveTask()', () => {
  it('saveTask must add task on existing list', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
    ];
    const newTask = {
      index: 2,
      description: 'two',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTask.saveTask(newTask, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
  it('saveTask must start from inde one', () => {
    // Arrange
    const tasks = [];
    const newTask = {
      index: 2,
      description: 'two',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'two',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTask.saveTask(newTask, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});
