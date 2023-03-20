import Image from 'next/image'

import { Button } from '@/components/Button'

import locationSvg from '~/icons/location.svg'
import userSvg from '~/icons/user.svg'

const form = [
  {
    id: 'name',
    type: 'text',
    label: 'Name and Surname',
    button: 'Change name',
  },
  {
    id: 'email',
    type: 'text',
    label: 'Email',
    button: 'Change email',
  },
  {
    id: 'phone',
    type: 'text',
    label: 'Phone Number',
    button: 'Change phone',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    button: 'Change password',
  },
]

export const Settings = () => {
  return (
    <div className="grid divide-y divide-gray-light">
      <div className="flex pb-10">
        <div className="h-[227px] w-[227px] rounded bg-gray-thin"></div>
        <div className="pl-10">
          <h2 className="mb-2.5 text-lg">Name and Surname</h2>
          <p className="mb-10 flex">
            <Image
              src={locationSvg}
              alt="location"
              className="mr-2.5"
            />
            Yerevan, Armenia
          </p>
          <Button
            size="lg"
            variant="outlined"
          >
            <Image
              src={userSvg}
              alt="Picture of the author"
              className="mr-2.5"
            />
            Upload Avatar
          </Button>
        </div>
      </div>
      <form
        action="src/app/(profile)/user"
        className="divide-y divide-gray-light"
      >
        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-light">
            {form.map((item) => (
              <tr key={item.id}>
                <td className="py-10 align-top">
                  <label
                    htmlFor=""
                    className="text-sm text-black-light"
                  >
                    {item.label}:
                  </label>
                </td>
                <td className="py-10">
                  <input
                    id={item.id}
                    type={item.type}
                    className="w-full rounded border border-gray-light px-5 py-2.5 text-base text-black outline-0"
                  />
                </td>
                <td className="w-1 w-48 py-10 pl-10">
                  <Button
                    variant="outlined"
                    size="fl"
                  >
                    {item.button}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Settings
Settings.Layout = 'Main'
