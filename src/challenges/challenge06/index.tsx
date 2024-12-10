import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Challenge06 = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto p-4">
      <div className="h-2 bg-gray-200 fixed top-0 left-0 w-full">
        <div className="h-full bg-gradient-to-r from-red-600 to-green-600 origin-left animate-scale-progress [animation-timeline:scroll(root)]" />
      </div>

      <div className="col-span-6 flex flex-col items-center gap-2 mb-4">
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 flex gap-2"
        >
          <ArrowLeft /> Back
        </button>
        <h1 className="text-2xl font-bold text-center">Challenge 06</h1>
        <p className="text-center text-gray-500">
          Scroll to see the magic happen
        </p>
      </div>

      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="w-[400px] p-6 bg-white rounded-lg shadow-lg border border-red-100 mx-auto">
          <p className="text-gray-700 leading-relaxed text-sm">
            Candy cane jingle sleigh reindeer sparkle gingerbread. Holly wreath
            cozy snowflake mistletoe frosty cheer stockings joy. Tinsel lights
            evergreen cocoa yuletide twinkling carols glow. Snowman festive
            bells chimney Santa Claus warm wishes. Icicles cookies Rudolph gift
            wrapping merry elves. Deck the halls Noel laughter peppermint
            marshmallows hearth. Nutcracker fireplace holly berry cocoa sleigh
            bells cheer. Twinkling garland sugarplum stockings merry frosty
            glow. Snowflake sparkle reindeer cozy mittens Santa Claus cheer.
            Candy cane wishes holly wreath evergreen sleigh bells. Gingerbread
            elves cocoa peppermint laughter twinkling lights. Mistletoe chimneys
            warm cocoa carols bells Noel. Icicles glitter joy snowman
            marshmallows Christmas tree. Deck the halls with tinsel, cheer, and
            nutcrackers galore. Reindeer jingle frosty sparkle Santa Claus
            mistletoe. Sleigh bells candy cane chimney holly berry marshmallows
            glow. Noel warmth sugarplum snowman evergreen twinkling lights. Cozy
            cocoa peppermint wreaths gingerbread carols joy. Icicles nutcracker
            stockings reindeer chimney bells laughter. Holly fireplace
            snowflakes decked halls of yuletide splendor. Garland merry wishes
            frost-covered gifts by the hearth. Yuletide gingerbread stockings
            snowman glow warm cocoa mittens. Sleigh bells sparkle evergreen
            peppermint laughter marshmallows cheer. Icicles wreaths chimney
            twinkling mistletoe holly joy. Tinsel nutcracker garland sugarplum
            cozy Christmas wishes. Candy canes Santa Claus frosty decked halls
            festive lights. Rudolph sleigh reindeer snowflake warmth Noel by the
            fire. Chimneys glow with carols, stockings, and yuletide sparkle.
            Tinsel glitter snowman peppermint holly evergreen jingle cocoa.
            Sugarplum mittens sleigh bells frosty marshmallows twinkling carols.
            Santa Claus gifts mistletoe chimney nutcracker joy. Icicles cozy
            warmth by the hearth, decked halls. Reindeer Rudolph gingerbread
            festive candy cane garland glow. Holly wreaths cheer stockings glow
            with Christmas joy. Noel merry yuletide lights sparkle with holiday
            magic. Sleigh sparkle peppermint reindeer snowman stockings tinsel
            glow. Chimney frosty warmth cocoa laughter wreaths mistletoe cheer.
            Garland Santa Claus gingerbread bells carols nutcracker holly.
            Icicles sugarplum lights Rudolph festive fireplace joy. Snowflakes
            candy cane sparkle cozy decked halls with laughter. Warm wishes Noel
            glow by the evergreen-covered hearth. Cheer fills the air, with
            twinkling lights and marshmallows. Snowflake tinsel Santa Claus joy
            stockings sleigh bells mistletoe. Icicles Rudolph frosty sparkle
            cocoa wreaths gingerbread laughter. Peppermint chimney evergreen
            sugarplum garland marshmallows cheer. Festive reindeer glow Noel
            twinkling lights by the fire. Snowman cozy warmth fills the air with
            Christmas magic. Holly berry nutcracker sleigh gifts jingle joy.
            Deck the halls in yuletide splendor with cheer. Rudolph frosty candy
            canes peppermint tinsel stockings marshmallows glow. Sleigh bells
            twinkling mistletoe chimney garland wreaths holly. Santa Claus
            sugarplum nutcracker fireplace evergreen cheer joy. Warmth by the
            hearth with cozy cocoa and laughter. Icicles snowflakes reindeer
            sparkle gingerbread festive lights. Decked halls of Noel jingle with
            the magic of Christmas. Sleigh rides and carols bring joy to
            yuletide hearts. Evergreen twinkling snowflakes stockings candy
            canes mistletoe glow. Cozy fireplace cheer fills the air with Santa
            Claus magic. Garland wreaths sugarplum gingerbread sleigh bells
            festive laughter. Icicles sparkle Rudolph snowman holly berry joy by
            the hearth. Warm cocoa marshmallows peppermint chimney nutcracker
            Noel. Tinsel frosty sleigh lights twinkle in holiday splendor.
            Reindeer bring gifts as the season fills hearts with warmth.
            Twinkling lights garland wreaths candy canes stockings mistletoe
            joy. Snowman frosty cocoa laughter warm hearths decked halls. Santa
            Claus sparkle gingerbread sleigh bells Rudolph nutcracker cheer.
            Icicles glow reindeer sugarplum marshmallows cozy evergreen. Noel
            festive tinsel carols holly wreaths twinkling lights. Chimney warmth
            fills the air with Christmas magic and laughter. Decked halls
            glisten with yuletide splendor and holiday glow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge06;
