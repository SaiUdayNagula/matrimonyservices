import { Collapse } from "antd";
const items = [
  {
    key: "1",
    label: "Why we choose this Matrimony ?",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s,`
  },
  {
    key: "2",
    label: "Why we recommend this Matrimony ?",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s,`
  },
  {
    key: "3",
    label: "Do we need to pay money for matrimony?",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s,`
  },
  {
    key: "4",
    label: "How does matrimony work?",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s,`
  },
  {
    key: "5",
    label: "What should I write about me in matrimony?",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s,`
  },
];
const FAQ = () => {
  const panelStyle = {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "12px",
    marginBottom: "1rem",
    overflow : 'hidden',
    padding : '.75rem'
  };
  return (
    <main className="bg-gradient-to-r from-[#EEF9E0] to-[#F8EACC] py-10">
      <div className="w-[75%] mx-auto">
        <h3 className="text-center text-4xl font-semibold">-FAQ-</h3>
        <p className="text-center mt-2 text-3xl font-[300]">Need Help?</p>
        <div className="mt-10">
          <Collapse
            accordion
            defaultActiveKey={["0"]}
            expandIconPosition="end"
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
            expandIcon={(props) => {
              const icon = props.isActive
                ? "/assets/hyphen.svg"
                : "/assets/plus.svg";
              return (
                <p className="text-4xl font-[500]">
                  <img src={icon} width={14} alt="" />
                </p>
              );
            }}
          >
            {items.map((e) => {
              return (
                <Collapse.Panel header={<p className="text-xl font-bold">{e.label}</p>} style={panelStyle}>
                  <p className="text-lg text-[300]">{e.data}</p>
                </Collapse.Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </main>
  );
};
export default FAQ;
