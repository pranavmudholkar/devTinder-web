/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const { firstName, lastName, photoURL, about } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user.photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <div className="flex card-actions justify-between m-2">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
