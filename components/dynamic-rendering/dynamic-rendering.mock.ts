import { IComponent } from "./dynamic-rendering.interfaces";

const mockResponse: IComponent = {
  type: "Container",
  data: {
    id: "4400936b-6158-1354-9dc8-a04c57e1af46",
    fluid: true,
    items: [
      {
        type: "Card",
        data: {
          id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
          title: "A custom title",
          headline: "A random Headline",
          copy: "A really long text....",
          items: [
            {
              type: "Button",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "Button example 0",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "Card",
              data: {
                id: "26b3f355-2f121265-4aae-b9fd-609779f24fdd12122",
                title: "A custom title item 1",
                headline: "A random Headline",
                copy: "A really long text....",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
          ],
        },
      },
      {
        type: "Card",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46121",
          ititle: "Title",
          headlne: "This can be anything",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          items: [
            {
              type: "Divider",
              data: {
                id: "4400936b-6158-4943-9dc8-dsfhjs32723sds",
                marginY: 5,
              },
            },
            {
              type: "Button",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "Button example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "Card",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
          ],
        },
      },
      {
        type: "Divider",
        data: {
          id: "4400936b-6158-4943-9dc8-dsfhjs32723",
          marginY: 5,
        },
      },
      {
        type: "Card",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46",
          title: "Title",
          headline: "This can be anything",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
        },
      },
      {
        type: "Divider",
        data: {
          id: "4400936b-6158-4845-9dc8-dsfhjs32723",
          marginY: 5,
        },
      },
      {
        type: "Container",
        data: {
          id: "d76e3a5f-01ad-46f6-a45d-3ad9699ecf99",
          embeddedView: {
            type: "Input",
            data: {
              id: "26b3f355-2f65-4aae-b9fd-123",
              label: "Input",
              type: "password",
              placeholder: "Password",
              isRequired: false,
              minCharactersAllowed: 1,
              maxCharactersAllowed: 100,
              validations: [
                {
                  regexType: "eightOrMoreCharacters",
                  regexErrorCopy: "Use 8 or more characters",
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default mockResponse;