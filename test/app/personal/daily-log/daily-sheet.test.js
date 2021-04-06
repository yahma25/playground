import DailySheet from 'src/personal/daily-log/daily-sheet';

describe('model DailySheet', () => {
  it('is correct all data', () => {
    const mockData = [
      {
        "date": "2021-02-28",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Translating, Writing, Reading",
        "state": "done"
      },
      {
        "date": "2021-02-28",
        "category": "study",
        "section": "development",
        "content": "My private homepage - Creating Daily Log page",
        "state": "progress"
      },
      {
        "date": "2021-02-27",
        "category": "exercise",
        "section": "home",
        "content": "Walking up/down a stepbox / 20:00",
        "state": "done"
      },
      {
        "date": "2021-02-27",
        "category": "study",
        "section": "development",
        "content": "My private homepage - Creating Daily Log page",
        "state": "progress"
      },
      {
        "date": "2021-02-26",
        "category": "study",
        "section": "English",
        "content": "Reading Canva online event - Zero to Billions - Engineering for Scale at Canva 1/4",
        "state": "progress",
        "note": "210223, 27 Zero to Billions - Engineering for Scale at Canva - 1 / 4 Reading - Google Docs"
      },
      {
        "date": "2021-02-25",
        "category": "exercise",
        "section": "home",
        "content": "Walking up/down a stepbox / 15:00",
        "state": "done"
      },
      {
        "date": "2021-02-25",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Assertion Functions",
        "state": "done",
        "note": "210227 Assertion Functions - Google Docs"
      },
      {
        "date": "2021-02-24",
        "category": "study",
        "section": "English",
        "content": "Reading Canva online event - Zero to Billions - Engineering for Scale at Canva 1/4",
        "state": "progress",
        "note": "210223, 27 Zero to Billions - Engineering for Scale at Canva - 1 / 4 Reading - Google Docs"
      },
      {
        "date": "2021-02-24",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Assertion Functions",
        "state": "progress",
        "note": "210227 Assertion Functions - Google Docs"
      },
      {
        "date": "2021-02-24",
        "category": "exercise",
        "section": "home",
        "content": "Walking up/down a stepbox / 11:00",
        "state": "done"
      },
      {
        "date": "2021-02-23",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Reading, Writing",
        "state": "done"
      },
      {
        "date": "2021-02-22",
        "category": "study",
        "section": "English",
        "content": "Reading Canva online event - Zero to Billions - Engineering for Scale at Canva 1/4",
        "state": "progress",
        "note": "Zero to Billions - Engineering for Scale at Canva - 1 / 4 - Google Docs"
      },
      {
        "date": "2021-02-21",
        "category": "study",
        "section": "English",
        "content": "Reading Canva online event - Zero to Billions - Engineering for Scale at Canva 1/4",
        "state": "progress",
        "note": "Zero to Billions - Engineering for Scale at Canva - 1 / 4 - Google Docs"
      },
      {
        "date": "2021-02-21",
        "category": "exercise",
        "section": "park",
        "content": "Walking up/down the stair / 14:00",
        "state": "done"
      },
      {
        "date": "2021-02-20",
        "category": "private",
        "section": "home",
        "content": "freedom",
        "state": "done"
      },
      {
        "date": "2021-02-19",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Translating, Writing",
        "state": "done"
      },
      {
        "date": "2021-02-18",
        "category": "study",
        "section": "development",
        "content": "Implement feature that removes speaker comments in a subtitle using Python",
        "state": "done",
        "note": "yahma25/linefeed-transform (github.com)"
      },
      {
        "date": "2021-02-18",
        "category": "study",
        "section": "English",
        "content": "Writing youtube script",
        "state": "done",
        "note": "210216, 19 Writing - Google Docs"
      },
      {
        "date": "2021-02-18",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Type Guards",
        "state": "done",
        "note": "210219 Type Guards - Google Docs"
      },
      {
        "date": "2021-02-17",
        "category": "study",
        "section": "English",
        "content": "Algorythm - The law of big numbers",
        "state": "progress"
      },
      {
        "date": "2021-02-17",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210216, 19 Listening - Google Docs"
      },
      {
        "date": "2021-02-17",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Objects and Arrays",
        "state": "done",
        "note": "210219 Objects and Arrays - Google Docs"
      },
      {
        "date": "2021-02-16",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking, Reading, Writing",
        "state": "done"
      },
      {
        "date": "2021-02-16",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Union and Intersection Types",
        "state": "done",
        "note": "210219 Union and Intersection Types - Google Docs"
      },
      {
        "date": "2021-02-15",
        "category": "study",
        "section": "English",
        "content": "Speaking youtube script",
        "state": "done",
        "note": "210216 Speaking - Google Docs"
      },
      {
        "date": "2021-02-15",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210216, 19 Listening - Google Docs"
      },
      {
        "date": "2021-02-15",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210216 Reading - Google Docs"
      },
      {
        "date": "2021-02-14",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "progress",
        "note": "210216 Reading - Google Docs"
      },
      {
        "date": "2021-02-14",
        "category": "study",
        "section": "English",
        "content": "Writing youtube script",
        "state": "done",
        "note": "210209, 14 Writing - Google Docs"
      },
      {
        "date": "2021-02-13",
        "category": "study",
        "section": "English",
        "content": "Writing youtube script",
        "state": "progress",
        "note": "210209, 14 Writing - Google Docs"
      },
      {
        "date": "2021-02-13",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210209, 12 Listening - Google Docs"
      },
      {
        "date": "2021-02-13",
        "category": "study",
        "section": "development",
        "content": "Leader Pack's coding study",
        "state": "done"
      },
      {
        "date": "2021-02-12",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Functions",
        "state": "done",
        "note": "210214 Functions - Google Docs"
      },
      {
        "date": "2021-02-12",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Errors",
        "state": "done",
        "note": "210214 Errors - Google Docs"
      },
      {
        "date": "2021-02-11",
        "category": "study",
        "section": "development",
        "content": "Leader Pack's coding study",
        "state": "done"
      },
      {
        "date": "2021-02-10",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210209, 12 Listening - Google Docs"
      },
      {
        "date": "2021-02-09",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking, Reading, Listening, Writing",
        "state": "done"
      },
      {
        "date": "2021-02-08",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210209, 12 Listening - Google Docs"
      },
      {
        "date": "2021-02-07",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210209 Reading - Google Docs"
      },
      {
        "date": "2021-02-06",
        "category": "study",
        "section": "English",
        "content": "Translating typescript - Code Flow",
        "state": "done",
        "note": "210214 Code Flow - Google Docs"
      },
      {
        "date": "2021-02-05",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Translating, Listening, Writing, Speaking",
        "state": "done"
      },
      {
        "date": "2021-02-04",
        "category": "private",
        "section": "meet",
        "content": "Dinner with HoChul Lee",
        "state": "done"
      },
      {
        "date": "2021-02-03",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done"
      },
      {
        "date": "2021-02-02",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking, Listening, Writing",
        "state": "done"
      },
      {
        "date": "2021-02-01",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210202, 05 Listening - Google Docs"
      },
      {
        "date": "2021-01-31",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210202 Reading - Google Docs"
      },
      {
        "date": "2021-01-31",
        "category": "study",
        "section": "English",
        "content": "Creating a new version quizlet",
        "state": "done"
      },
      {
        "date": "2021-01-30",
        "category": "study",
        "section": "English",
        "content": "Translating Quick Fixes of typescript",
        "state": "done",
        "note": "210204 Quick Fixes - Google Docs"
      },
      {
        "date": "2021-01-30",
        "category": "study",
        "section": "English",
        "content": "Translating Classes 101 of typescript",
        "state": "done",
        "note": "210204 Classes 101 - Google Docs"
      },
      {
        "date": "2021-01-30",
        "category": "study",
        "section": "development",
        "content": "Leader Pack's coding study",
        "state": "done"
      },
      {
        "date": "2021-01-29",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Translating, Writing, Listening, Speaking",
        "state": "done"
      },
      {
        "date": "2021-01-28",
        "category": "private",
        "section": "office",
        "content": "Having dinner with my team colleagues",
        "state": "done"
      },
      {
        "date": "2021-01-27",
        "category": "study",
        "section": "development",
        "content": "Preparing seminar - JS Execution Context",
        "state": "progress"
      },
      {
        "date": "2021-01-27",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done"
      },
      {
        "date": "2021-01-27",
        "category": "study",
        "section": "English",
        "content": "Translating Function Chaining of typescript",
        "state": "done",
        "note": "210129 Function Chaining - Google Docs"
      },
      {
        "date": "2021-01-26",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking, Reading, Listening, Writing",
        "state": "done"
      },
      {
        "date": "2021-01-25",
        "category": "study",
        "section": "English",
        "content": "Reading, Listening, Speaking youtube script",
        "state": "done"
      },
      {
        "date": "2021-01-24",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210126 Reading - Google Docs"
      },
      {
        "date": "2021-01-23",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Translating, Listening, Speaking",
        "state": "done"
      },
      {
        "date": "2021-01-22",
        "category": "private",
        "section": "home",
        "content": "I was cold",
        "state": "done"
      },
      {
        "date": "2021-01-21",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done"
      },
      {
        "date": "2021-01-21",
        "category": "study",
        "section": "English",
        "content": "Translating Accessibility Modifiers of typescript",
        "state": "done",
        "note": "210122 Accessibility Modifiers - Google Docs"
      },
      {
        "date": "2021-01-20",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done"
      },
      {
        "date": "2021-01-19",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Reading, Speaking, Listening",
        "state": "done"
      },
      {
        "date": "2021-01-18",
        "category": "study",
        "section": "English",
        "content": "Listening, Speaking youtube script",
        "state": "progress"
      },
      {
        "date": "2021-01-17",
        "category": "study",
        "section": "English",
        "content": "Listening, Speaking youtube script",
        "state": "progress"
      },
      {
        "date": "2021-01-17",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210119 Reading - Google Docs"
      },
      {
        "date": "2021-01-16",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210119 Reading - Google Docs"
      },
      {
        "date": "2021-01-16",
        "category": "study",
        "section": "development",
        "content": "Leader Pack's coding study",
        "state": "done"
      },
      {
        "date": "2021-01-15",
        "category": "study",
        "section": "development",
        "content": "Reading a book - Database that can learn easily by a cartoon 139/241",
        "state": "progress"
      },
      {
        "date": "2021-01-15",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Translating, Listening, Speaking",
        "state": "done"
      },
      {
        "date": "2021-01-14",
        "category": "study",
        "section": "development",
        "content": "Reading a book - Database that can learn easily by a cartoon 126/241",
        "state": "progress"
      },
      {
        "date": "2021-01-14",
        "category": "study",
        "section": "English",
        "content": "Translating Unknown in Catch of typescript",
        "state": "done",
        "note": "210115 Unknown in Catch - Google Docs"
      },
      {
        "date": "2021-01-14",
        "category": "study",
        "section": "English",
        "content": "Translating Uncalled Function Checks of typescript",
        "state": "done",
        "note": "210115 Uncalled Function Checks - Google Docs"
      },
      {
        "date": "2021-01-13",
        "category": "study",
        "section": "development",
        "content": "Reading a book - Database that can learn easily by a cartoon 59/241",
        "state": "progress"
      },
      {
        "date": "2021-01-13",
        "category": "study",
        "section": "English",
        "content": "Translating Nullish Coalescing of typescript",
        "state": "done",
        "note": "210115 Nullish Coalescing - Google Docs"
      },
      {
        "date": "2021-01-12",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Reading",
        "state": "done",
        "note": "210112 Reading - Google Docs"
      },
      {
        "date": "2021-01-12",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking",
        "state": "done",
        "note": "210112 Speaking - Google Docs"
      },
      {
        "date": "2021-01-11",
        "category": "study",
        "section": "development",
        "content": "Reading a book - Database that can learn easily by a cartoon 39/241",
        "state": "progress"
      },
      {
        "date": "2021-01-11",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "210112 Listening - Google Docs"
      },
      {
        "date": "2021-01-11",
        "category": "study",
        "section": "English",
        "content": "Speaking youtube script",
        "state": "done",
        "note": "210112 Speaking - Google Docs"
      },
      {
        "date": "2021-01-11",
        "category": "study",
        "section": "development",
        "content": "Reading a book - Project management that can learn easily by a cartoon 206/206",
        "state": "done"
      },
      {
        "date": "2021-01-10",
        "category": "study",
        "section": "development",
        "content": "Reading a book - Project management that can learn easily by a cartoon 135/206",
        "state": "progress"
      },
      {
        "date": "2021-01-10",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "done",
        "note": "210112 Reading - Google Docs"
      },
      {
        "date": "2021-01-09",
        "category": "study",
        "section": "English",
        "content": "Creating a pull request of JSDoc Support at Typescript GitHub",
        "state": "done"
      },
      {
        "date": "2021-01-08",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking - Translating",
        "state": "done",
        "note": "20210108 JSDoc Support - Google Docs"
      },
      {
        "date": "2021-01-08",
        "category": "study",
        "section": "English",
        "content": "Listening youtube script",
        "state": "done",
        "note": "20210108 Listening - Google Docs"
      },
      {
        "date": "2021-01-07",
        "category": "study",
        "section": "English",
        "content": "Translating JSDoc Support of typescript",
        "state": "done",
        "note": "202101 JSDoc Support - Google Docs"
      },
      {
        "date": "2021-01-06",
        "category": "study",
        "section": "English",
        "content": "Learn English with English teacher - Speaking",
        "state": "done",
        "note": "202001 1w - Google Docs"
      },
      {
        "date": "2021-01-05",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "progress",
        "note": "202001 1w - Google Docs"
      },
      {
        "date": "2021-01-04",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "progress",
        "note": "202001 1w - Google Docs"
      },
      {
        "date": "2021-01-03",
        "category": "exercise",
        "section": "jogging",
        "content": "Dangsan station ↔ Yeouido / 01:05 / 6.27km",
        "state": "done"
      },
      {
        "date": "2021-01-03",
        "category": "study",
        "section": "English",
        "content": "Reading youtube script",
        "state": "progress",
        "note": "202001 1w - Google Docs"
      },
      {
        "date": "2021-01-02",
        "category": "study",
        "section": "development",
        "content": "Leader Pack's coding study",
        "state": "done"
      },
      {
        "date": "2021-01-01",
        "category": "private",
        "section": "home",
        "content": "freedom",
        "state": "done"
      }
    ];

    const mock = {
      "id": "467902381",
      "title": "2021",
      "logs": mockData
    };

    const dailySheet = DailySheet.createFromJson(mock);

    const expectedMonths = [1, 2];
    expect(dailySheet.getMonths()).toEqual(expectedMonths);

    const expectedCategoryNames = ['study', 'exercise', 'private'];
    expect(dailySheet.getCategoryNames()).toEqual(expectedCategoryNames);

    expect(dailySheet.getCountOfCategory('study')).toBe(85);
    expect(dailySheet.getCountOfCategory('exercise')).toBe(5);
    expect(dailySheet.getCountOfCategory('private')).toBe(5);
    expect(dailySheet.getCountOfCategoryOfMonth(1, 'study')).toBe(46);
    expect(dailySheet.getCountOfCategoryOfMonth(1, 'exercise')).toBe(1);
    expect(dailySheet.getCountOfCategoryOfMonth(1, 'private')).toBe(3);
  });
});