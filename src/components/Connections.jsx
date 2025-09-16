import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      //   console.log(res);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <h1 className="flex justify-center my-10 font-bold text-xl">
        No Connections found
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { firstName, lastName, photoURL, age, gender, about } =
          connection;

        return (
          <div
            key={connection.id || connection._id}
            className="m-4 p-4 bg-base-300 flex w-1/2 mx-auto"
          >
            <div>
              <img
                alt="user-photo"
                className="w-20 h-20 rounded-full"
                src={photoURL}
              />
            </div>
            <div className="text-left mx-4 my-2 ">
              <h1 className="font-boldtext-xl">{firstName + " " + lastName}</h1>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
