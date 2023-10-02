import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return json({ message: "Hello Joy" });
};

export const action = async ({ request }) => {
  const fromdata = await request.formData();
  return Object.fromEntries(fromdata.entries());
};

const Data = () => {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  console.log({ actionData });
  return (
    <div>
      {loaderData.message}

      <div>
        <Form method="POST">
          <input name="first_name" />
          <input name="last_name" />
          <button>submit</button>
        </Form>
      </div>
      <div>
        My name is :{" "}
        {actionData
          ? ` ${actionData.first_name} ${actionData.last_name}`
          : null}
      </div>
    </div>
  );
};

export default Data;
