import { useEffect, useState, useRef } from "react";

function SelectBox() {
  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const bodyRef = useRef(null);

  const closeStyle = {
    padding: 0,
    height: 0,
    overflow: "hidden",
  };

  useEffect(() => {
    if (search.trim() === "") {
      setTopics([]);
      return;
    }

    const fetchTopics = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/?search=${search}`);
        if (!response.ok) {
          throw new Error("Failed to fetch topics");
        }
        const result = await response.json();
        setTopics(result.data.matchedTechs);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bodyRef.current && !bodyRef.current.contains(event.target)) {
        setTopics([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
  }, []);

  const handleItemClick = (topicName) => {
    setInputValue(topicName);
    setTopics([]);
  };

  return (
    <div className="c-box" ref={bodyRef}>
      <input
        className="tpc"
        placeholder="topic"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setSearch(e.target.value);
          setInputValue(e.target.value);
        }}
      />
      <div
        className="c-selectbox"
        style={topics.length === 0 ? closeStyle : {}}
      >
        {topics.map((topic) => (
          <div
            className="item"
            key={topic.id}
            onClick={() => handleItemClick(topic.name)}
          >
            <label htmlFor={topic.id}>{topic.name}</label>
            <input type="radio" name="topic" id={topic.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectBox;
