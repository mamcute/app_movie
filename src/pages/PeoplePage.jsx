import { useLoaderData } from "react-router-dom";
import ImageComponent from "../components/Image";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import { GENDER_MAPPING } from "../libs/constant";

const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  return (
    <div className="bg-black text-white text-[1.2vw]">
      <div className="container">
        <div className="flex-1 ">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`}
            width={600}
            height={900}
            className="mb-6"
          />
          <div>
            <p className="font-bold text-[1.3vw] mb-6">Personal Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Know For</p>
                <p>{peopleInfo.know_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p> {GENDER_MAPPING[peopleInfo.gender]}</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{peopleInfo.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>{peopleInfo.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="font-bold text-[2vw] mb-6">{peopleInfo.name}</p>
          <div className="mb-6">
            <p className="font-bold text-[1.4vw] mb-4">Biography</p>
            <p className="whitespace-pre-line">{peopleInfo.biography}</p>
          </div>
          <div>
            <RelatedMediaList
              mediaList={peopleInfo.combined_credits?.cast || []}
              title="Know For"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
