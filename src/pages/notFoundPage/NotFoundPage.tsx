import { Link } from 'react-router-dom'

import notFound from '@/assets/images/404.png'
import { Button } from '@/common/components/ui/button'
import { Page } from '@/common/components/ui/page'
import { Typography } from '@/common/components/ui/typography'

import s from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <Page className={s.container}>
      <div className={s.image}>
        <img alt={'Page not found'} src={notFound} />
      </div>
      <Typography className={s.text}>Sorry! Page not found!</Typography>
      <Button as={Link} to={'/'}>
        <Typography as={'span'} variant={'subtitle2'}>
          Back to home page
        </Typography>
      </Button>
    </Page>
  )
}
