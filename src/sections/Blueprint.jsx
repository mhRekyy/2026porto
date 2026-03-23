import { blueprint } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Blueprint = () => {
  return (
    <section id="blueprint" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="The Blueprint"
          sub="⭐️ Execution & Workflow"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {blueprint.map((blueprint, index) => (
            <GlowCard card={blueprint} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={blueprint.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{blueprint.name}</p>
                  <p className="text-white-50">{blueprint.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
