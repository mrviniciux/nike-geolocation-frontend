import Flash from '../../src/components/Flash';

it('should return a object with type and message', () => {
  const swalReturn = Flash.create('success', ['test']);
  expect(swalReturn.type).toBe('success');
  expect(swalReturn.message).toBe('test');
});
