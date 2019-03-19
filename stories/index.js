import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Button, Form, Table, UploadForm } from '../components';

storiesOf('Bouton de contact', module)
  .addDecorator(centered)
  .add('Défaut', () => (
    <Button>Hello Button</Button>
  ))
  .add('Désactivé', () => (
    <Button disabled={true}>Hello Button</Button>
  ));

storiesOf('Contact Form', module)
  .addDecorator(centered)
  .add('Première page', () => (
    <Form></Form>
  ))
  .add('Seconde page', () => (
    <UploadForm></UploadForm>
  ));