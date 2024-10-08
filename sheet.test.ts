import wretch from 'wretch'

const api = wretch('http://localhost:8888').resolve((r) => r.json())

describe('sheet call', () => {
  it('can call sheet api', async () => {
    const res = await api.get('/sheet').catch((error) => {
      throw new Error(`Call failed with ${error.status}`)
    })
    expect(res).toContainEqual({
      key: 'TEST',
      name: 'TEST',
      url: '/sheet/TEST/',
    })
  })
  it('can list all the tabs in the sheet', async () => {
    const res = await api.get('/sheet/TEST').catch((error) => {
      throw new Error(`Call failed with ${error.status}`)
    })
    expect(res).toEqual({
      sheets: [
        {
          url: '/sheet/TEST/Info',
        },
        {
          url: '/sheet/TEST/Teams',
        },
        {
          url: '/sheet/TEST/Plaatsing%20Stand',
        },
        {
          url: '/sheet/TEST/Group%20Games',
        },
        {
          url: '/sheet/TEST/Per%20team',
        },
        {
          url: '/sheet/TEST/Knockout%20Games',
        },
        {
          url: '/sheet/TEST/Calculate%20Schedule',
        },
        {
          url: '/sheet/TEST/Calculate%20Knockout',
        },
        {
          url: '/sheet/TEST/Result',
        },
      ],
    })
  })
  it('can list all values in a tab', async () => {
    const res = await api.get('/sheet/TEST/Result').catch((error) => {
      throw new Error(`Call failed with ${error.status}`)
    })
    expect(res).toMatchObject({
      values: [
        {
          id: 1,
          rank: '1',
        },
        {
          id: 2,
          rank: '2',
        },
        {
          id: 3,
          rank: '3',
        },
        {
          id: 4,
          rank: '4',
        },
        {
          id: 5,
          rank: '5',
        },
        {
          id: 6,
          rank: '6',
        },
        {
          id: 7,
          rank: '7',
        },
        {
          id: 8,
          rank: '8',
        },
        {
          id: 9,
          rank: '9',
        },
        {
          id: 10,
          rank: '10',
        },
      ],
      sheets: [
        {
          url: '/sheet/TEST/Info',
        },
        {
          url: '/sheet/TEST/Teams',
        },
        {
          url: '/sheet/TEST/Plaatsing%20Stand',
        },
        {
          url: '/sheet/TEST/Group%20Games',
        },
        {
          url: '/sheet/TEST/Per%20team',
        },
        {
          url: '/sheet/TEST/Knockout%20Games',
        },
        {
          url: '/sheet/TEST/Calculate%20Schedule',
        },
        {
          url: '/sheet/TEST/Calculate%20Knockout',
        },
        {
          url: '/sheet/TEST/Result',
        },
      ],
    })
  })
})
