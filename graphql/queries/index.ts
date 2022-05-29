import { gql } from "@apollo/client";

export const SPACEX_PAYLOAD = gql`
  query {
    launchLatest {
      launch_date_local
    }
    launchNext {
      launch_date_local
    }
  }
`;
