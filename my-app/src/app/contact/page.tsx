'use client';

import { useActionState } from 'react';
import { submitContactForm, State } from '../api/contact/action';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const initialState: State = {
    message: null,
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <div style={{ background: 'linear-gradient(to right, #ff7f50, #9b59b6)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '24px', backgroundColor: 'white', color: 'black', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>Contactez-nous</h2>

        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Champ : Nom */}
          <div>
            <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500' }}>Nom</label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              style={{ marginTop: '4px', width: '100%', borderRadius: '4px', padding: '8px', border: '1px solid #d1d5db' }}
            />
            {state.errors?.name && <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>{state.errors.name[0]}</p>}
          </div>

          {/* Champ : Email */}
          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500' }}>E-mail</label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              style={{ marginTop: '4px', width: '100%', borderRadius: '4px', padding: '8px', border: '1px solid #d1d5db' }}
            />
            {state.errors?.email && <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>{state.errors.email[0]}</p>}
          </div>

          {/* Champ : Téléphone */}
          <div>
            <label htmlFor="telephone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500' }}>Téléphone</label>
            <Input
              type="text"
              id="telephone"
              name="telephone"
              style={{ marginTop: '4px', width: '100%', borderRadius: '4px', padding: '8px', border: '1px solid #d1d5db' }}
            />
          </div>

          {/* Champ : Message */}
          <div>
            <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500' }}>Message</label>
            <Textarea
              id="message"
              name="message"
              required
              style={{ marginTop: '4px', width: '100%', borderRadius: '4px', padding: '8px', border: '1px solid #d1d5db' }}
              rows={4}
            />
            {state.errors?.message && <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>{state.errors.message[0]}</p>}
          </div>

          {/* Bouton de soumission */}
          <Button
            type="submit"
            disabled={isPending}
            style={{
              width: '100%',
              backgroundColor: '#3b82f6',
              // hover: { backgroundColor: '#2563eb' },
              color: 'white',
              padding: '12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isPending ? "Envoi en cours..." : "Envoyer le message"}
          </Button>

          {/* Message de retour */}
          {state.message && (
            <div
              style={{
                marginTop: '16px',
                padding: '12px',
                borderRadius: '4px',
                textAlign: 'center',
                backgroundColor: state.message.includes("succès") ? '#d1fad6' : '#fcd5d8',
                color: state.message.includes("succès") ? '#14532d' : '#9b2c2c',
              }}
            >
              {state.message}
            </div>
          )}
        </form>
      </div>
    </div>

  );
}
