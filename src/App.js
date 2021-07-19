function App() {
  return (
    <>
    <table>
      <tr class="navbar"> 
        <td class="element">aaaa</td>
        <td class="element">uwu</td>
        <td class="element">why</td>
        <td class="element">help</td>
      </tr>
    </table>
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

export default App;