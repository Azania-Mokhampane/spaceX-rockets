import { gql } from "@apollo/client";

export const SPACEX_LAUNCHES = gql`
  query {
    launchLatest {
      launch_date_local
      details
    }
    launchNext {
      launch_date_local
      details
    }
  }
`;
