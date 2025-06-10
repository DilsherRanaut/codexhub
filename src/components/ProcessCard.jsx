

export default function ProcessCard(props) {
  return (
    <div className={`process-card ${props.className}`}>
      <div className="process-card-inner">
        <div className="icons-area">
          <div className="col-2 align-center process-card-icon mx-auto">
            <img src={props.icon} alt="Icon" />
          </div>
        </div>
        <div className="content-area">
          <h4 className="process-card-title pt-2">{props.title}</h4>
          <p className="process-card-description">
           {props.content}
          </p>
          <a href={props.linkUrl} className="process-card-link">
            {props.linkName}
          </a>
        </div>
      </div>
    </div>
  );
}
