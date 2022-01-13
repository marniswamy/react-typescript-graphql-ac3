import "./Message.css";

const Message = () => {
  return (
    <div className="align-center">
      <span>No search results available</span>
      <p>
        [You can use the above input to search the body or title of the React
        repo's issues as well as for the status OPEN or CLOSED]
      </p>
    </div>
  );
};

export default Message;
