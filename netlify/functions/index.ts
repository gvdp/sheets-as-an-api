import { Handler } from '@netlify/functions'
import axios, { AxiosError } from 'axios'
import { fetchTokens } from '../../src/google-tokens'

export const handler: Handler = async (event) => {
  const { code } = event.queryStringParameters as { code: string }

  if (!code) {
    return { statusCode: 404 }
  }

  try {
    const tokens = await fetchTokens(code, 'http://localhost:8888')

    // todo: also show link of page to go to test this
    // todo: there needs to be a redeploy or some cache clearing before the token is correctly used as env variable
    return {
      statusCode: 200,
      body: `
        ntl env:set REFRESH_TOKEN ${tokens.refresh_token}
      `,
    }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error((e as AxiosError).response?.data)
    } else {
      console.error(e)
    }
    return { statusCode: 500 }
  }
}
