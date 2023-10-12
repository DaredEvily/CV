export default (props)=>(
    <div class="card">
        <i class={props.icon}></i>
        {props.url ? <a target="_blank" href={props.url}><h3>{props.title}</h3></a> : <h3>{props.title}</h3>}
        <h4>{props.des}</h4>
    </div>
)