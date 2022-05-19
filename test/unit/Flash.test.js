import Flash from '../../components/Flash';

it('should return a object', () => {
  const swalReturn = Flash.create('success', ['test']);
  expect(typeof swalReturn === 'object').toBeTruthy();
});
