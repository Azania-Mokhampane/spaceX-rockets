import { gql } from "@apollo/client";

export const SPACEX_LAUNCH_DATES = gql`
  query {
    launchLatest {
      launch_date_local
    }
    launchNext {
      launch_date_local
    }
  }
`;

export const SPACEX_LATEST_LAUNCH = gql`
  query {
    launchLatest {
      details
    }
  }
`;
export const SPACEX_NEXT_LAUNCH = gql`
  query {
    launchNext {
      details
    }
  }
`;
