import styled from "styled-components";
import tw from "twin.macro";

export const Body = styled.main`
  ${tw`bg-gray-100 min-h-full`}
  .all {
    ${tw`flex flex-col`}
  }
`;

export const Main = styled.section`
  ${tw`flex flex-col justify-start my-20 sm:my-44 mx-5 sm:mx-10 md:mx-14 lg:mx-32 px-3 sm:px-10 md:px-16 font-body text-justify`}
  .content {
    ${tw`flex flex-col sm:flex-row mb-20`}
  }
  .title {
    ${tw``}
    h3 {
      ${tw`w-28 md:w-40 lg:w-60 font-body font-semibold mb-3`}
    }
  .text {
    ${tw``}
    p {
      ${tw``}
    }
  }
`;

export const MyCover = styled.section`
  ${tw`h-40 sm:h-60 filter drop-shadow-xl rounded-b bg-gradient-to-r from-pink-500 to-yellow-500`}
`;

export const MyNav = styled.nav`
  ${tw`flex justify-center py-2`}
  .link {
    ${tw`font-medium px-4 rounded-full p-2 hover:bg-gray-300 hover:ring-4 hover:ring-gray-700`}
  }
  .active {
    ${tw`text-gray-700 text-opacity-80`}
  }
`;

export const MyCard = styled.section`
  ${tw`flex justify-center my-14 sm:my-20`}
  .imgWrapper, .img {
    ${tw`rounded-full w-24 h-24 sm:w-48 sm:h-48 ring-4 ring-pink-300`}
  }
  .text {
    ${tw`text-2xl sm:text-5xl mx-4 flex flex-col justify-center my-12 sm:my-24 sm:py-2 font-body font-bold`}
    p {
      ${tw`text-sm sm:text-xl`}
    }
  }
`;

export const Form = styled.form`
  ${tw`flex flex-col space-y-5 m-auto w-full max-w-[400px] font-body`}
  header {
    ${tw`text-xl font-bold flex`}
    img {
      ${tw`ml-3 w-6 flex`}
    }
  }
  .submit,
  .input {
    ${tw`w-full flex items-start flex-col space-y-2`}
    label {
      ${tw`text-[rgba(0,0,0,.8)] capitalize text-sm`}
    }
    textarea,
    input {
      ${tw`w-full py-2 px-5 border border-[rgba(0,0,0,.6)] text-[rgba(0,0,0,.8)] rounded-lg`}
      :placeholder {
        ${tw`capitalize text-[rgba(0,0,0,.8)]`}
      }
    }
  }
  .submit {
    ${tw`w-full`}
    input {
      ${tw`w-auto cursor-pointer py-2.5 px-5 bg-newGreen text-white rounded-lg`}
    }
  }
`;
