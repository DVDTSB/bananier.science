function Main() {
  return (
    <>
    <Navbar/>
    <div class="bananier">
      <button onClick={()=>{
        window.open("https://ro.wikipedia.org/wiki/Bananier", "_blank")
      }}>
        <h1 class="hoverable"><i>bananier</i></h1>
      </button>
    </div>
    </>
  );
}

export default Main;