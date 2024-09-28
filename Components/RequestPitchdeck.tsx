"use client";
import { useState } from 'react';

export default function RequestPitchdeck() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [position, setPosition] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/send-pitchdeck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, firstName, lastName, organization, comment }),
    });

    if (response.ok) {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Request Pitchdeck</h1>
      {success ? (
        <p>Pitchdeck has been sent to your email!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email Adress:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Organization:
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Position:
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Position:
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
            id="comment"
            name="comment"
            rows={5}
            cols={33}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Écrivez votre message ici..."
            required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Pitchdeck'}
          </button>
        </form>
      )}
    </div>
  );
}