import styled from "styled-components";
import Datetime from "react-datetime";

export const DatetimeStyled = styled(Datetime)`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath fill='%234a56e2' d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z'/%3E%3C/svg%3E%0A")
    no-repeat right 14px bottom 12px;
  transition: background-image 0.4s ease;
  & .form-control {
    padding: 0px 0px 8px;
  }
  & .rdtPicker {
    background: #fff;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    margin-top: -10px;
    margin-left: -40px;

    min-width: 20px;
    padding: 10px;
    position: absolute;

    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 15px;
  }
  &:hover {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath fill='%2324cca7' d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z'/%3E%3C/svg%3E%0A")
      no-repeat right 14px bottom 12px;
  }
`;
