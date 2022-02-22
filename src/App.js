import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Background'></div>
      <div className='Name'>Connor Rack</div>
      <div className='PageFrame'>
        <div className='Header'>
          <p>Showcase</p>
          <div className='HeaderLinks'>
            <p>Blog</p>
            <p>Github</p>
          </div>
        </div>
        <div className='ShowcaseGrid'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <div className='ShowcaseColumns'>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
          </div>
          <div className='ShowcaseColumns ShowcaseColumnCenter'>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
          </div>
          <div className='ShowcaseColumns'>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
            <div className='ShowcaseItem'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
