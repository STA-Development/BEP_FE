import React from 'react'
import IndividualPage1 from '@components/IndividualPage1'
import { useRouter } from 'next/router'

const EducationalInstitutePage = () => {
  const router = useRouter()
  const { id } = router.query

  if (typeof id === 'undefined') {
    // Handle the case where the id is undefined
    return <div>Id is undefined</div>
  }

  const idString = Array.isArray(id) ? id[0] : id // Convert id to a string

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-4 flex w-3/4 flex-col items-center justify-center">
        <IndividualPage1
          id={idString}
          description="Lorem ipsum dolor sit amet consectetur. Placerat etiam aliquam aliquam non elit tempor
        facilisis id. Id nam mauris amet volutpat. Mauris faucibus morbi dignissim elit. Purus
        pharetra accumsan suspendisse pellentesque fringilla euismod ut. Blandit lorem vitae urna
        quis tincidunt aenean ornare magna vulputate. Risus justo consectetur sem cursus dolor urna
        dictumst urna leo. Ac ac convallis amet consectetur tincidunt porta est sit. Eget non
        faucibus ultrices gravida risus pulvinar scelerisque augue. Aliquam mauris vitae nullam id
        et purus enim. Ac interdum tellus aliquam nisl. Sed habitant porttitor lectus rhoncus urna
        ac. Ante at nunc diam pulvinar id nibh sagittis. Quisque vitae in ultricies senectus egestas
        porta. Diam elit venenatis purus sed aliquam. Rutrum integer risus amet volutpat pharetra
        id. Lorem orci eu morbi elementum in. Amet consequat nunc non pharetra diam turpis.
        Adipiscing porta arcu amet molestie nunc venenatis. Auctor dignissim et nibh sit sed
        malesuada. Etiam vel eleifend ornare nec urna. At nunc volutpat velit ornare sapien feugiat
        consequat. Condimentum interdum vitae augue rhoncus lectus hac ut. Vitae duis arcu
        suspendisse sociis nam maecenas nunc. Felis sed nunc eget ultrices. Eu ante sit consequat
        nunc eu. Metus sapien lectus massa faucibus amet morbi nunc. Sapien fames mauris non
        praesent blandit nisi. Tristique dictum enim eu pharetra. Natoque et et euismod egestas
        hendrerit amet scelerisque. Nisl ultrices ante est tellus. Odio tortor etiam nunc massa.
        Mattis sollicitudin consectetur parturient et sagittis in leo. Condimentum nam sollicitudin
        et sapien auctor aliquet. Praesent ullamcorper non quis massa. Diam a turpis aenean diam
        morbi erat. Eget est sapien malesuada dignissim. Donec magna amet neque est molestie
        adipiscing faucibus commodo id. Elementum integer vitae sed sollicitudin fringilla felis.
        Condimentum est enim consectetur pulvinar condimentum sapien lorem integer. Enim euismod
        purus amet morbi malesuada adipiscing morbi tellus. Vel tempor condimentum massa ac quis.
        Vulputate dignissim nisi nisi nunc vitae. Non pretium nec orci imperdiet et ultrices a
        volutpat. Lacus tristique donec sem eget ullamcorper sed. Ullamcorper ultricies semper
        vestibulum nibh est et. Enim ligula ipsum amet."
        />
      </div>
    </div>
  )
}

export default EducationalInstitutePage
