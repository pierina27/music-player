const fakeList = [
    {
      items: [
        [
          {
            items: [
              {
                upload_id: 60674,
                file_page_url: 'http://ccmixter.org/files/airtone/60674',
                upload_name: 'reNovation',
                artist_page_url: 'http://ccmixter.org/people/airtone',
                user_real_name: 'airtone',
                user_name: 'airtone',
                download_url:
                  'http://ccmixter.org/content/airtone/airtone_-_reNovation.mp3',
              },
              {
                upload_id: '60660',
                file_page_url: 'http://ccmixter.org/files/SackJo22/60660',
                upload_name: 'Black to the Night (1000 Ways Mix)',
                artist_page_url: 'http://ccmixter.org/people/SackJo22',
                user_real_name: 'SackJo22',
                user_name: 'SackJo22',
                download_url:
                  'http://ccmixter.org/content/SackJo22/SackJo22_-_Black_to_the_Night_(1000_Ways_Mix)_1.mp3',
              },
              {
                upload_id: '60675',
                file_page_url: 'http://ccmixter.org/files/mindmapthat/60675',
                upload_name: 'Blue Sky Blues',
                artist_page_url: 'http://ccmixter.org/people/mindmapthat',
                user_real_name: 'Kara Square',
                upload_contest: '0',
                user_name: 'mindmapthat',
                download_url:
                  'http://ccmixter.org/content/mindmapthat/mindmapthat_-_Blue_Sky_Blues.mp3',
              },
            ],
            total: [4073],
          },
        ],
      ],
    },
  ]

export default async () => {
    return fakeList
}