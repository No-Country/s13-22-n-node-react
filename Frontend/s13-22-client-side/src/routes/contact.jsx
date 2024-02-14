import React, { useState } from 'react';

export default function Contact() {
  const [contact, setContact] = useState({
    first: "Sofi",
    last: "Dev",
    avatar: "https://itssofi.dev/img/avatar_purple.webp",
    twitter: "itssofidev",
    notes: "frontend developer",
    favorite: false,
  });

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      favorite: !prevContact.favorite
    }));
  }

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
          alt="Avatar"
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <button
            name="favorite"
            value={contact.favorite ? "false" : "true"}
            aria-label={contact.favorite ? "Remove from favorites" : "Add to favorites"}
            onClick={toggleFavorite}
          >
            {contact.favorite ? "★" : "☆"}
          </button>
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}
      </div>
    </div>
  );
}
