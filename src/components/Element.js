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
        {props.source ? (
        <img src={props.source} alt={props.alt} width="100%" height="100%"/>
        ):
        (<></>)}
        </center>
        <p>{props.text}</p>
    </article>
  );
}

export default Element;