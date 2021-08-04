import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      //debug();

      const allFullnameText = getAllByTestId('fullnameText');
      expect(allFullnameText[0]).toHaveTextContent('jaredpalmer/formik');
      expect(allFullnameText[1]).toHaveTextContent('async-library/react-async');

      const allDescriptionText = getAllByTestId('descriptionText');
      expect(allDescriptionText[0]).toHaveTextContent(
        'Build forms in React, without the tears'
      );
      expect(allDescriptionText[1]).toHaveTextContent(
        'Flexible promise-based React data loader'
      );

      const allLanguageText = getAllByTestId('languageText');
      expect(allLanguageText[0]).toHaveTextContent('TypeScript');
      expect(allLanguageText[1]).toHaveTextContent('JavaScript');

      const allForksCountText = getAllByTestId('forksCountText');
      expect(allForksCountText[0]).toHaveTextContent('1.6k');
      expect(allForksCountText[1]).toHaveTextContent('69');

      const allStargazersCountText = getAllByTestId('stargazersCountText');
      expect(allStargazersCountText[0]).toHaveTextContent('21.9k');
      expect(allStargazersCountText[1]).toHaveTextContent('1.8k');

      const allRatingAverageText = getAllByTestId('ratingAverageText');
      expect(allRatingAverageText[0]).toHaveTextContent('88');
      expect(allRatingAverageText[1]).toHaveTextContent('72');

      const allReviewCountText = getAllByTestId('reviewCountText');
      expect(allReviewCountText[0]).toHaveTextContent('3');
      expect(allReviewCountText[1]).toHaveTextContent('3');
    });
  });
});
