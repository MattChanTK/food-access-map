/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
import Map from '../../components/Map';

export default function HomePage() {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Link to="/locations">
        I go to the Location table page! Style me as a navbar you fool!
      </Link>
      <h1 className="headline">
        <FormattedMessage {...messages.header} />
      </h1>
      <Map />
    </Grid>
  );
}
