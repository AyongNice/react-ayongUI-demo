import Radio from "../../ayongUI/components/radio";

const RadioPage = () => {
  return (
    <div>
      <h1>Radio</h1>
      <fieldset>
        <legend>基本</legend>
        <Radio val="111" label="Line" />
        <Radio val="222" label="Rectangle" />
        {/* <input type="radio" name="111" value="111" />1
        <input type="radio" name="111" value="111" />2 */}
      </fieldset>
    </div>
  );
};

export default RadioPage;
