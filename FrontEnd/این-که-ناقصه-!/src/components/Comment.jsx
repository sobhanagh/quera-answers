import Avatar from "../assets/avatar.png";
function Comment({ name, message, setName, children }) {
  const handleRepliClick = () => {
    const element = document.querySelector(".ac-wrapper");

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setName(name);
  };

  return (
    <div className="box">
      <div className="content">
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="texts">
          <div className="header">
            <h3 className="name">{name}</h3>
            <button onClick={handleRepliClick}>replay</button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
      <div className="children">
        {children.map(({ id, name, message, children }) => (
          <Comment
            key={id}
            id={id}
            name={name}
            message={message}
            setName={setName}
            children={children}
          />
        ))}
      </div>
    </div>
  );
}

export default Comment;
