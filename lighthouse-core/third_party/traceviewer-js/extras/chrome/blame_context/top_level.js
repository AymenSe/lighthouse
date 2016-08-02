/**
Copyright 2016 The Chromium Authors. All rights reserved.
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
**/

require("./blame_context.js");

'use strict';

/**
 * @fileoverview Trace Viewer side's correspondence of Chrome's
 * content::TopLevelBlameContext class.
 *
 */
global.tr.exportTo('tr.e.chrome', function() {
  var BlameContextSnapshot = tr.e.chrome.BlameContextSnapshot;
  var BlameContextInstance = tr.e.chrome.BlameContextInstance;

  function TopLevelSnapshot() {
    BlameContextSnapshot.apply(this, arguments);
  }

  TopLevelSnapshot.prototype = {
    __proto__: BlameContextSnapshot.prototype,

    get userFriendlyName() {
      return 'TopLevel';
    }
  };

  tr.model.ObjectSnapshot.register(
      TopLevelSnapshot,
      {typeName: 'TopLevel'});

  function TopLevelInstance() {
    BlameContextInstance.apply(this, arguments);
  }

  TopLevelInstance.prototype = {
    __proto__: BlameContextInstance.prototype,

    get blameContextType() {
      return 'TopLevel';
    }
  };

  tr.model.ObjectInstance.register(
      TopLevelInstance,
      {typeName: 'TopLevel'});

  return {
    TopLevelSnapshot: TopLevelSnapshot,
    TopLevelInstance: TopLevelInstance
  };
});
