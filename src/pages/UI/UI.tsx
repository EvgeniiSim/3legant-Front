import { useState } from "react";
import { TabsItems } from "../../constants/TabsLabels";

import Select from "../../components/UI/Select/Select";
import classes from "./UI.module.scss";
import Button from "../../components/UI/Button/Button";
import Link from "../../components/UI/CustomLink/CustomLink";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Tabs from "../../components/UI/Tabs/Tabs";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import Input from "../../components/UI/Inputs";

const UI = () => {
   const [inputValue, setInputValue] = useState("");
   const [selectOpen, setSelectOpen] = useState(false);
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [currentTab, setCurrentTab] = useState("Additional Info");
   const [checked, setChecked] = useState(false);

   let tabsContent;

   switch (currentTab) {
      case "Additional Info":
         tabsContent = "Additional Info";
         break;
      case "Questions":
         tabsContent = "Questions";
         break;

      case "Reviews":
         tabsContent = "Reviews";
         break;
   }
   return (
      <div className={classes.wrapper}>
         <Select open={selectOpen} setOpen={setSelectOpen}>
            Item
         </Select>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "20px",
            }}>
            <Button raduis="sm">Show more</Button>
            <Button raduis="md">Show more</Button>
         </div>
         <Link to="#">Link</Link>
         <Dropdown
            label="Description"
            open={dropdownOpen}
            setOpen={setDropdownOpen}>
            <ul>
               <li>Item</li>
               <li>Item</li>
               <li>Item</li>
               <li>Item</li>
            </ul>
         </Dropdown>
         <Tabs
            tabsItems={TabsItems}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}>
            {tabsContent}
         </Tabs>
         <Breadcrumbs />
         <Input.Radio name={"name"} value={"value"} id={"radio-test"} />
         <Input.Checkbox
            checked={checked}
            setChecked={setChecked}
            name={"name"}
            id={"checkbox-test"}>
            value
         </Input.Checkbox>
         <Input.Text
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="test"
         />
         <Input.Password
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="test"
         />
      </div>
   );
};

export default UI;
