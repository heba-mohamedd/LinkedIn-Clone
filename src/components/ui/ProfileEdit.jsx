import { Button, Input, Flex, Typography } from "antd";
import React, { useState } from "react";
import { editProfile } from "../../api";
import { IoReturnDownBackOutline } from "react-icons/io5";
const { TextArea } = Input;
export function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState({
    name: "",
    headline: "",
    country: "",
    city: "",
    company: "",
    industry: "",
    college: "",
    website: "",
    aboutMe: "",
    skills: "",
  });

  const getInput = (event) => {
    let { name, value } = event.target;
    // let input = { [name]: value };
    setEditInputs((prev) => ({ ...prev, [name]: value }));
  };
  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  useState(() => {
    if (currentUser) {
      setEditInputs((prev) => ({ ...prev, ...currentUser }));
    }
  }, [currentUser]);
  return (
    <div className="mt-6 bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto border">
      <Button onClick={onEdit} className="mb-4">
        <IoReturnDownBackOutline size={20} />
        Go Back
      </Button>

      {/* <div className="grid gap-4"> */}
      <Flex vertical gap={16}>
        <Field label="Name">
          <Input name="name" value={editInputs.name} onChange={getInput} />
        </Field>

        <Field label="Headline">
          <Input
            name="headline"
            value={editInputs.headline}
            onChange={getInput}
          />
        </Field>

        <Field label="Country">
          <Input
            name="country"
            value={editInputs.country}
            onChange={getInput}
          />
        </Field>

        <Field label="City">
          <Input name="city" value={editInputs.city} onChange={getInput} />
        </Field>

        <Field label="Company">
          <Input
            name="company"
            value={editInputs.company}
            onChange={getInput}
          />
        </Field>

        <Field label="Industry">
          <Input
            name="industry"
            value={editInputs.industry}
            onChange={getInput}
          />
        </Field>

        <Field label="College">
          <Input
            name="college"
            value={editInputs.college}
            onChange={getInput}
          />
        </Field>

        <Field label="Website">
          <Input
            name="website"
            value={editInputs.website}
            onChange={getInput}
          />
        </Field>

        <Field label="About Me">
          <TextArea
            name="aboutMe"
            value={editInputs.aboutMe}
            onChange={getInput}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Field>
        <Field label="Skills">
          <Input
            name="skills"
            placeholder="Skills"
            value={editInputs.skills}
            onChange={getInput}
          />
        </Field>
      </Flex>
      {/* </div> */}

      <div className="flex justify-center mt-6">
        <Button type="primary" className="w-1/2" onClick={updateProfileData}>
          Save
        </Button>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <Typography.Title level={5}>{label}</Typography.Title>
      {children}
    </div>
  );
}
