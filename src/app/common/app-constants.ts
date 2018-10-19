export const AppConstants= {
  beginnerAssessmentTemplateIds: [1, 2, 4, 5, 3, 6],
  advancedAssessmentTemplateIds: [5, 3, 6, 9, 11, 7, 10, 12, 8],
  sharedAssessmentTemplateIds: [5, 3, 6],
  AssessmentTemplateEnum: {
    StepLadderDash: 1,
    StepLadderDribble: 2,
    PowerKick: 3,
    WallBall3m: 4,
    BroadJump: 5,
    ZigZagDash: 6,
    ZigZagDribble: 7,
    WallBall7m: 8,
    TriangleDash: 9,
    TriangleDashCC: 10,
    TriangleDribble: 11,
    TriangleDribbleCC: 12
  },
  GenderEnum: {
    Male: 'M',
    Female: 'F'
  },
  DominantFootEnum: {
    Right: 1,
    Left: 2,
    Neither: 3
  },
  getDominantFootIntValue: function (stringOrIntValue) {
    // log('getDominantFootIntValue: ' + stringOrIntValue)
    for (const prop in this.DominantFootEnum) {
      if ((prop === stringOrIntValue) || (this.DominantFootEnum[prop] === stringOrIntValue)) {
        return this.DominantFootEnum[prop];
      }
    }
  },
  PrimaryPositionEnum: {
    None: 1,
    Forward: 2,
    Midfield: 3,
    Defender: 4,
    GoalKeeper: 5
  },
  getPrimaryPositionIntValue: function (stringOrIntValue) {
    // log('getPrimaryPositionIntValue: ' + stringOrIntValue)
    for (const prop in this.PrimaryPositionEnum) {
      if ((prop === stringOrIntValue) || (this.PrimaryPositionEnum[prop] === stringOrIntValue)) {
        return this.PrimaryPositionEnum[prop];
      }
    }
  },
  ScreeningEventStatusEnum: {
    Pending: 1,
    Starting: 2,
    Started: 3,
    Complete: 4
  },
  getScreeningEventStatusIntValue: function (stringOrIntValue) {
    // log('getScreeningEventStatusIntValue: ' + stringOrIntValue)
    for (const prop in this.ScreeningEventStatusEnum) {
      if ((prop === stringOrIntValue) || (this.ScreeningEventStatusEnum[prop] === stringOrIntValue)) {
        return this.ScreeningEventStatusEnum[prop];
      }
    }
  },
  // TerrainTypeEnum: initial need is for easy translation
  TerrainTypeEnum: {
    GrassOrTurf: 0,
    ConcreteOrWood: 1,
    Dirt: 2
  },
  terrainList: [
    {
      text: 'Grass or Turf',
      icon: 'img/surface/grass.jpg',
      enumName: 'GrassOrTurf',
      value: 0
    },
    {
      text: 'Concrete or Wood',
      icon: 'img/surface/concrete.jpg',
      enumName: 'ConcreteOrWood',
      value: 1
    },
    {
      text: 'Dirt',
      icon: 'img/surface/dirt.jpg',
      enumName: 'Dirt',
      value: 2
    }
  ],
  getTerrainIntValue: function (stringOrIntValue) {
    // log('getTerrainIntValue: ' + stringOrIntValue)
    for (const itemIndex in this.terrainList) {
      // console.log('this.terrainList[item]: ', this.terrainList[itemIndex]);
      if ((this.terrainList[itemIndex].value === stringOrIntValue) || (this.terrainList[itemIndex].enumName === stringOrIntValue)) {
        return this.terrainList[itemIndex].value;
      }
    }
  },
  /* ScreenTemplate.TemplateType enum */
  ScreenTemplateIdEnum: {
    PathwayScreenFutbolizate: 1
  },
  MINIMUM_ADVANCED_LEVEL: 5, // CONST to determine minimum level needed to be considered advanced
  pathwayAssessments: [
    {
      assessmentTemplateId: 1,
      title_en: 'Step Ladder Dash',
      title_es: 'ES-Step Ladder Dash',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/E4NmN4ZjE64bLii4n5FO0TfpKQRnZVaX.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/E4NmN4ZjE64bLii4n5FO0TfpKQRnZVaX.m3u8'
    },
    {
      assessmentTemplateId: 2,
      title_en: 'Step Ladder Dribble',
      title_es: 'ES-Step Ladder Dribble',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FlNmN4ZjE6c9aCLo45fTGKVT_JSdhaGI.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FlNmN4ZjE6c9aCLo45fTGKVT_JSdhaGI.m3u8'
    },
    {
      assessmentTemplateId: 3,
      title_en: 'Power Kick',
      title_es: 'ES-Power Kick',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/0Ls9XZaFwLg",
      // videoUrl_es: "https://www.youtube.com/embed/0Ls9XZaFwLg",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FvNmN4ZjE6Pak__ms_2DYRptnDWtXCvK.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FvNmN4ZjE6Pak__ms_2DYRptnDWtXCvK.m3u8'
    },
    {
      assessmentTemplateId: 4,
      title_en: 'Wall Ball (3m)',
      title_es: 'ES-Wall Ball (3m)',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FpNmN4ZjE6XyZZJMRTZYyzViT6WFAD4s.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FpNmN4ZjE6XyZZJMRTZYyzViT6WFAD4s.m3u8'
    },
    {
      assessmentTemplateId: 5,
      title_en: 'Broadjump',
      title_es: 'ES-Broadjump',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/xnMmN4ZjE6l6xXQr0U04DkeJwQH-o2A6.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/xnMmN4ZjE6l6xXQr0U04DkeJwQH-o2A6.m3u8'
    },
    {
      assessmentTemplateId: 6,
      title_en: 'Zig-Zag Dash',
      title_es: 'ES-Zig-Zag Dash',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/o8CbOdPxL7s",
      // videoUrl_es: "https://www.youtube.com/embed/o8CbOdPxL7s",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/1rOWR4ZjE6wbo6-jxKr0umD1L34wfQOL.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/1rOWR4ZjE6wbo6-jxKr0umD1L34wfQOL.m3u8'
    },
    {
      assessmentTemplateId: 7,
      title_en: 'Zig-Zag Dribble',
      title_es: 'ES-Zig-Zag Dribble',
      content_en: '<h4>Set-Up and Materials Required for Doggie Dash Screen:</h4><p>Start by setting up the 17 cones using the diagram below.  It is called Doggie Dash because the cones create the shape of a dog (see picture to the right).  The overall dimensions of the course is 16 meters by 7 meters.  The total materials required include:</p><ul><li>One Ball</li><li>Stopwatch</li><li>17  Small Cones</li><li>Chalk (option instead of cones)</li></ul><h4>How to Perform the Doggie Dash Screen:</h4><p>Have the player set-up behind the start line.  Begin the timer as soon as they cross the start line.  The player first goes through the zig-zag circuit of 8 cones.  Then they dribble through the finish gate to the top left corner of the circuit.  They perform a 360 degree turn around the upper left hand corner cone.  Then they pass the ball through the one meter wide gate along the back stretch and run around the gate to recollect the ball.  Now they dribble as fast as they can to the lower right hand cone. After maneuvering around that cone they make another 90 degree turn around the final perimeter cone and make their way back to the zig-zag circuit.  This time they must pass through the 4 cones series on the right alternating dribbling to the right and left around each cone. Finally the timer is stopped as soon as the player passes the finish gate.</p><p>Each player should have one practice run and then two real attempts - record their best time.</p>',
      content_es: '<h4>ES-Set-Up and Materials Required for Doggie Dash Screen:</h4><p>Start by setting up the 17 cones using the diagram below.  It is called Doggie Dash because the cones create the shape of a dog (see picture to the right).  The overall dimensions of the course is 16 meters by 7 meters.  The total materials required include:</p><ul><li>One Ball</li><li>Stopwatch</li><li>17  Small Cones</li><li>Chalk (option instead of cones)</li></ul><h4>How to Perform the Doggie Dash Screen:</h4><p>Have the player set-up behind the start line.  Begin the timer as soon as they cross the start line.  The player first goes through the zig-zag circuit of 8 cones.  Then they dribble through the finish gate to the top left corner of the circuit.  They perform a 360 degree turn around the upper left hand corner cone.  Then they pass the ball through the one meter wide gate along the back stretch and run around the gate to recollect the ball.  Now they dribble as fast as they can to the lower right hand cone. After maneuvering around that cone they make another 90 degree turn around the final perimeter cone and make their way back to the zig-zag circuit.  This time they must pass through the 4 cones series on the right alternating dribbling to the right and left around each cone. Finally the timer is stopped as soon as the player passes the finish gate.</p><p>Each player should have one practice run and then two real attempts - record their best time.</p>',
      // videoUrl_en: "https://www.youtube.com/embed/wwriKmIyjs4",
      // videoUrl_es: "https://www.youtube.com/embed/wwriKmIyjs4",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/ZvOWR4ZjE6rdQSJZ3oKFv1J0_HgwxHsI.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/ZvOWR4ZjE6rdQSJZ3oKFv1J0_HgwxHsI.m3u8'
    },
    {
      assessmentTemplateId: 8,
      title_en: 'Wall Ball (7m)',
      title_es: 'ES-Wall Ball (7m)',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FhNmN4ZjE6P1nZifCGmuf0wJKay8VIU6.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FhNmN4ZjE6P1nZifCGmuf0wJKay8VIU6.m3u8'
    },
    {
      assessmentTemplateId: 9,
      title_en: 'Triangle Dash (C)',
      title_es: 'ES-Triangle Dash (C)',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/.m3u8'
    },
    {
      assessmentTemplateId: 10,
      title_en: 'Triangle Dash (CC)',
      title_es: 'ES-Triangle Dash (CC)',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FjNmN4ZjE6voKEOCREsx_WW23Fzc6v9-.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FjNmN4ZjE6voKEOCREsx_WW23Fzc6v9-.m3u8'
    },
    {
      assessmentTemplateId: 11,
      title_en: 'Triangle Dribble (C)',
      title_es: 'ES-Triangle Dribble (C)',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all about turning sharply'+
      ' with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones and'+
      'another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li>'+
      '<li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li>'+
      '<li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all about turning '+
      'sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out with 10 cones '+
      'and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li>'+
      '<li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li>'+
      '<li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FrNmN4ZjE6X_K-kx3Oeto9t-nTOR7QDM.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FrNmN4ZjE6X_K-kx3Oeto9t-nTOR7QDM.m3u8'
    },
    {
      assessmentTemplateId: 12,
      title_en: 'Triangle Dribble (CC)',
      title_es: 'ES-Triangle Dribble (CC)',
      content_en: '<p>Be the complete striker with this soccer shooting drill. This shooting drill is all '+
      'about turning sharply with your back to goal, into space and finishing with style.'+
      '</p><p>The turn square is marked out with 10 cones and another person or required to pass the ball into you.'+
      '</p><p>TIPS</p><ol><li>Run into the square</li><li>Server passes to striker</li><li>Turn out of the box with one touch.'+
      ' Turn sharply using the   outside of the boot</li><li>Shoot towards goal making sure you hit the target</li>'+
      '<li>Repeat using other foot</li></ol>',
      content_es: '<p>ES-Be the complete striker with this soccer shooting drill. This shooting drill is all'+
      ' about turning sharply with your back to goal, into space and finishing with style.</p><p>The turn square is marked out'+
      ' with 10 cones and another person or required to pass the ball into you.</p><p>TIPS</p><ol><li>Run into the square</li>'+
      '<li>Server passes to striker</li><li>Turn out of the box with one touch. Turn sharply using the   outside of the boot</li>'+
      '<li>Shoot towards goal making sure you hit the target</li><li>Repeat using other foot</li></ol>',
      // videoUrl_en: "https://www.youtube.com/embed/SoijY4BUCtw",
      // videoUrl_es: "https://www.youtube.com/embed/SoijY4BUCtw",
      videoUrl_en: 'https://player.ooyala.com/hls/player/iphone/FnNmN4ZjE6j8Lhnx93E0_dpdXsBOJ3ob.m3u8',
      videoUrl_es: 'https://player.ooyala.com/hls/player/iphone/FnNmN4ZjE6j8Lhnx93E0_dpdXsBOJ3ob.m3u8'
    }
  ],

  /* Returns the icon path for a given Assessment template.  Doing this here instead of defining on pathwayAssessments (templates) since
  that object is stored in db to so we may want to pull in from server. */
  getAssessmentTemplateIconUrl: function (assessmentTemplateId) {
    let result;

    switch (assessmentTemplateId) {
      case this.AssessmentTemplateEnum.StepLadderDash:
        result = 'icon-step-ladder-dash';
        break;
      case this.AssessmentTemplateEnum.StepLadderDribble:
        result = 'icon-step-ladder-dribble';
        break;
      case this.AssessmentTemplateEnum.PowerKick:
        result = 'icon-power-kick';
        break;
      case this.AssessmentTemplateEnum.WallBall3m:
        result = 'icon-wall-ball';
        break;
      case this.AssessmentTemplateEnum.BroadJump:
        result = 'icon-broad-jump';
        break;
      case this.AssessmentTemplateEnum.ZigZagDash:
        result = 'icon-zig-zag-dash';
        break;
      case this.AssessmentTemplateEnum.ZigZagDribble:
        result = 'icon-zig-zag-dribble';
        break;
      case this.AssessmentTemplateEnum.TriangleDash:
        result = 'icon-triangle-dash';
        break;
      case this.AssessmentTemplateEnum.TriangleDashCC:
        result = 'icon-triangle-dash-ccw';
        break;
      case this.AssessmentTemplateEnum.TriangleDribble:
        result = 'icon-triangle-dribble';
        break;
      case this.AssessmentTemplateEnum.TriangleDribbleCC:
        result = 'icon-triangle-dribble-ccw';
        break;
      case this.AssessmentTemplateEnum.WallBall7m:
        result = 'icon-wall-ball-7m';
        break;
    }

    return result;
  },

  /* Returns the route StateProvider.Name (i.e., app.screen_stepladderdash) for a given Assessment template.
  Will return a blank string if no matching route name.
      params: assesssmentTemplateId: make sure this gets passed in as a number. */
  getAssessmentTemplateTestStateNameForSingleScreen: function (assessmentTemplateId) {
    let result = '';

    switch (assessmentTemplateId) {
      case this.AssessmentTemplateEnum.BroadJump:
        result = 'app.screen_assessment_broadjump';
        break;
      case this.AssessmentTemplateEnum.PowerKick:
        result = 'app.screen_assessment_powerkick';
        break;
      case this.AssessmentTemplateEnum.StepLadderDash:
        result = 'app.screen_assessment_stepladderdash';
        break;
      case this.AssessmentTemplateEnum.StepLadderDribble:
        result = 'app.screen_assessment_stepladderdribble';
        break;
      case this.AssessmentTemplateEnum.TriangleDash:
        result = 'app.screen_assessment_triangledash';
        break;
      case this.AssessmentTemplateEnum.TriangleDashCC:
        result = 'app.screen_assessment_triangledashcc';
        break;
      case this.AssessmentTemplateEnum.TriangleDribble:
        result = 'app.screen_assessment_triangledribble';
        break;
      case this.AssessmentTemplateEnum.TriangleDribbleCC:
        result = 'app.screen_assessment_triangledribblecc';
        break;
      case this.AssessmentTemplateEnum.WallBall3m:
        result = 'app.screen_assessment_wallball3m';
        break;
      case this.AssessmentTemplateEnum.WallBall7m:
        result = 'app.screen_assessment_wallball7m';
        break;
      case this.AssessmentTemplateEnum.ZigZagDash:
        result = 'app.screen_assessment_zigzagdash';
        break;
      case this.AssessmentTemplateEnum.ZigZagDribble:
        result = 'app.screen_assessment_zigzagdribble';
        break;
    }

    console.log('AppConstants.getAssessmentTemplateTestStateNameForSingleScreen: result: ' + result);
    return result;
  },

  /* Returns the route StateProvider.Name (i.e., app.screeningevent_stepladderdash) for a given Assessment template.
  Will return a blank string if no matching route name.
      params: assesssmentTemplateId: make sure this gets passed in as a number. */
  getAssessmentTemplateTestStateNameForScreeningEventScreen: function (assessmentTemplateId) {
    let result = '';

    switch (assessmentTemplateId) {
      case this.AssessmentTemplateEnum.BroadJump:
        result = 'app.screeningevent_station_assessment_broadjump';
        break;
      case this.AssessmentTemplateEnum.PowerKick:
        result = 'app.screeningevent_station_assessment_powerkick';
        break;
      case this.AssessmentTemplateEnum.StepLadderDash:
        result = 'app.screeningevent_station_assessment_stepladderdash';
        break;
      case this.AssessmentTemplateEnum.StepLadderDribble:
        result = 'app.screeningevent_station_assessment_stepladderdribble';
        break;
      case this.AssessmentTemplateEnum.TriangleDash:
        result = 'app.screeningevent_station_assessment_triangledash';
        break;
      case this.AssessmentTemplateEnum.TriangleDashCC:
        result = 'app.screeningevent_station_assessment_triangledashcc';
        break;
      case this.AssessmentTemplateEnum.TriangleDribble:
        result = 'app.screeningevent_station_assessment_triangledribble';
        break;
      case this.AssessmentTemplateEnum.TriangleDribbleCC:
        result = 'app.screeningevent_station_assessment_triangledribblecc';
        break;
      case this.AssessmentTemplateEnum.WallBall3m:
        result = 'app.screeningevent_station_assessment_wallball3m';
        break;
      case this.AssessmentTemplateEnum.WallBall7m:
        result = 'app.screeningevent_station_assessment_wallball7m';
        break;
      case this.AssessmentTemplateEnum.ZigZagDash:
        result = 'app.screeningevent_station_assessment_zigzagdash';
        break;
      case this.AssessmentTemplateEnum.ZigZagDribble:
        result = 'app.screeningevent_station_assessment_zigzagdribble';
        break;
    }

    // log('AppConstants.getAssessmentTemplateTestStateNameForScreeningEventScreen: result: ' + result);
    return result;
  },

  /* Convenience method for converting a Date (timestamp ignored) from the server to a Date.  The problem is that
  a date (i.e., DOB) from the server comes down as a value like 2016-06-03T00:00:00Z which gets converted to
  06/02/2016 if just use new Date(dobFromServer).  This may only happen on a browser, but found the solution is to
  replace the -'s with /'s and remove the timestamp part ('T' and everything after)...sstetler
  */
  dateFromServerToDate: function (dateFromServer) {
    // if the incoming dateFromServer is not a string then need to abort / return it as is
    if (!dateFromServer || (typeof dateFromServer !== 'string')) {
      return dateFromServer;
    }

    let dateNoTimestamp = dateFromServer.replace(/-/g, '/');

    // strip off everything after 'T'
    const temp = dateNoTimestamp.split('T')[0];
    dateNoTimestamp = temp;

    // log('dateFromServerToDate: dateFromServer = ' + dateFromServer);
    // log('dateFromServerToDate: dateNoTimestamp = ' + dateNoTimestamp);

    const date = new Date(dateNoTimestamp);
    // return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    return date;
  },

  emptyGuid: '00000000-0000-0000-0000-000000000000',
  guid: function () {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  },
  s4: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
};
