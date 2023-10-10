import { render } from 'solid-js/web';

const Index = () => {
  return (
    <>
      <h1>First component</h1>
    </>
  );
};
export default Index;

render(Index, document.getElementById('index')!);
