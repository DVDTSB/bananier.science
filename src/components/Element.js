function Element(props) {
  return (
    <article>
        <center>
            <button class="button-title" onClick = {() => {
                window.open(props.url,"_blank")
            }}>
                <h1 class="hoverable">{props.title}</h1>
            </button>
            <br/>
        <img src={props.source} alt={props.alt} width="500" height="500"/>
        </center>
        <p>{props.text}</p>
    </article>
  );
}

export default Element;