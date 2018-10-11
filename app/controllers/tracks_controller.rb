class TracksController < ApplicationController

  def index
    @tracks = Track.all || []
    @productions = Production.all
    @labels = Label.all.sort_by {|label| label.position} || []
  end
end
