import { Link } from "react-router-dom";

function ContactListItem(props) {
  const { contact } = props;

  // no wage included in the api data...

  return (
    <li>
      <p className="first-last-name">
        {contact.firstName} {contact.lastName}
      </p>

      <div className="view-button">
        <Link to={`/contact/${contact.id}`}>View</Link>
      </div>
    </li>
  );
}

export default ContactListItem;
