import "./user-cart.design.scss";
const UserCart = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <div className="user-cart">
      <img src={avatar_url} alt={login} width={200} />
      <div className="dark-overlay">
        <p>{login}</p>
        <button>contact</button>
      </div>
    </div>
  );
};
export default UserCart;
