const From = (props) => {
  return (
    <div>
      <label htmlFor="from" style={{ color: "red" }}>
        From({props.from})
      </label>
      <select id="from" onChange={props.onChangeNow} style={{ color: "red" }}>
        {props.languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default From;
