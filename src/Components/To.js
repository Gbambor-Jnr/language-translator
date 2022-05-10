const To = (props) => {
  return (
    <div>
      <label htmlFor="to" style={{ color: "red" }}>
        To({props.to})
      </label>
      <select id="to" onChange={props.onChangeNow} style={{ color: "red" }}>
        {props.languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>

      {/* <textarea rows={80} cols={50} /> */}
    </div>
  );
};

export default To;
